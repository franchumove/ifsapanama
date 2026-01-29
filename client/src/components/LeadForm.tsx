import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { leadFormSchema, type LeadFormData } from "@shared/schema";
import { projectTypes, projectStages } from "@/data/services";
import { WhatsAppLink } from "./WhatsAppButton";

export function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<LeadFormData | null>(null);
  const { toast } = useToast();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      telefono: "",
      email: "",
      tipoProyecto: "",
      ubicacion: "",
      etapa: "",
      mensaje: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: LeadFormData) => {
      const response = await apiRequest("POST", "/api/lead", data);
      return response.json();
    },
    onSuccess: (_, variables) => {
      setFormData(variables);
      setIsSuccess(true);
      toast({
        title: "Solicitud enviada",
        description: "Redirigiendo a WhatsApp para confirmar...",
      });

      // Redirect to WhatsApp automatically after a short delay
      const message = `Hola IFSA PANAMÁ, quiero solicitar una visita técnica. Tipo de proyecto: ${variables.tipoProyecto}. Ubicación: ${variables.ubicacion}. Etapa: ${variables.etapa}. Nombre: ${variables.nombre}. Teléfono: ${variables.telefono}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/50765519061?text=${encodedMessage}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LeadFormData) => {
    mutation.mutate(data);
  };

  const getWhatsAppMessage = () => {
    if (!formData) return "";
    return `Hola IFSA PANAMÁ, quiero solicitar una visita técnica. Tipo de proyecto: ${formData.tipoProyecto}. Ubicación: ${formData.ubicacion}. Etapa: ${formData.etapa}. Nombre: ${formData.nombre}. Teléfono: ${formData.telefono}.`;
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-border/50" data-testid="card-form-success">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
              Solicitud recibida
            </h3>
            <p className="text-muted-foreground mb-6">
              Nos pondremos en contacto contigo para coordinar la visita técnica.
            </p>
            <WhatsAppLink message={getWhatsAppMessage()} className="inline-flex">
              <Button variant="outline" className="gap-2" data-testid="button-success-whatsapp">
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp ahora
              </Button>
            </WhatsAppLink>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-border/50" data-testid="card-lead-form">
      <CardHeader className="border-b border-border mb-6">
        <CardTitle className="font-heading text-xl uppercase tracking-widest">Solicitar visita técnica</CardTitle>
        <p className="text-muted-foreground text-[10px] uppercase tracking-wider">
          Formulario de control técnico de proyectos
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Tu nombre" 
                        {...field} 
                        data-testid="input-nombre"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa (opcional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Nombre de la empresa" 
                        {...field} 
                        data-testid="input-empresa"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+507 XXXX-XXXX" 
                        {...field} 
                        data-testid="input-telefono"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="tu@email.com" 
                        {...field} 
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tipoProyecto"
                render={({ field }) => (
                  <FormItem data-testid="form-field-tipo-proyecto">
                    <FormLabel>Tipo de proyecto *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-tipo-proyecto">
                          <SelectValue placeholder="Selecciona tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent data-testid="select-content-tipo-proyecto">
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value} data-testid={`select-option-tipo-${type.value}`}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="etapa"
                render={({ field }) => (
                  <FormItem data-testid="form-field-etapa">
                    <FormLabel>Etapa *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-etapa">
                          <SelectValue placeholder="Selecciona etapa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent data-testid="select-content-etapa">
                        {projectStages.map((stage) => (
                          <SelectItem key={stage.value} value={stage.value} data-testid={`select-option-etapa-${stage.value}`}>
                            {stage.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ubicacion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación del proyecto *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ciudad, provincia o dirección" 
                      {...field} 
                      data-testid="input-ubicacion"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mensaje"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje (opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos más sobre tu proyecto..."
                      className="resize-none"
                      rows={4}
                      {...field}
                      data-testid="input-mensaje"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full gap-2 font-semibold"
              disabled={mutation.isPending}
              data-testid="button-submit-form"
            >
              {mutation.isPending ? (
                "Enviando..."
              ) : (
                <>
                  Solicitar visita técnica
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
