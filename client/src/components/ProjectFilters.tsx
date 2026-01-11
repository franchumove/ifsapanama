import { Button } from "@/components/ui/button";
import { projectCategories } from "@/data/projects";

interface ProjectFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" data-testid="project-filters">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(null)}
        data-testid="filter-all"
      >
        Todos
      </Button>
      {projectCategories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
          data-testid={`filter-${category.value}`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
