import { Button } from "@/components/ui/button";
import { projectCategories } from "@/data/projects";

interface ProjectFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  const getCategoryImage = (val: string | null) => {
    switch(val) {
      case null: return "/images/btn-todos.png";
      case "obra-civil": return "/images/btn-obra.png";
      case "hidraulica": return "/images/btn-hidraulica.png";
      case "industrial": return "/images/btn-galeras.png";
      case "infraestructura": return "/images/btn-electrica.png";
      default: return "";
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2" data-testid="project-filters">
      <button
        onClick={() => onCategoryChange(null)}
        className={`transition-all duration-300 hover:scale-105 ${selectedCategory === null ? 'opacity-100 scale-105 drop-shadow-md' : 'opacity-100 hover:opacity-100 scale-95'}`}
        data-testid="filter-all"
      >
        <img src={getCategoryImage(null)} alt="Todos" className="h-[24px] md:h-[28px] object-contain" />
      </button>
      {projectCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`transition-all duration-300 hover:scale-105 ${selectedCategory === category.value ? 'opacity-100 scale-105 drop-shadow-md' : 'opacity-100 hover:opacity-100 scale-95'}`}
          data-testid={`filter-${category.value}`}
        >
          <img src={getCategoryImage(category.value)} alt={category.label} className="h-[24px] md:h-[28px] object-contain" />
        </button>
      ))}
    </div>
  );
}
