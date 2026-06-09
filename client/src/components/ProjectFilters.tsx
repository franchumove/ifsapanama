import { projectCategories } from "@/data/projects";

interface ProjectFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  // Using exactly the CSS layout rules requested:
  // Container: display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin-bottom: 40px;
  // Buttons (inactivos): background: transparent; border: 1px solid white; border-radius: 25px; padding: 8px 20px; color: white; cursor: pointer; transition: all 0.3s ease;
  // Botones (Activo): background-color: var(--naranja-corporativo); border-color: transparent; color: #000; font-weight: bold;
  
  return (
    <div 
      className="flex justify-center flex-wrap gap-[15px] mb-[40px] w-full"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginBottom: "40px" }}
      data-testid="project-filters"
    >
      <button
        onClick={() => onCategoryChange(null)}
        className={`transition-all duration-300 rounded-[25px] px-[20px] py-[8px] cursor-pointer text-sm md:text-base ${
          selectedCategory === null 
            ? "bg-[#FF6600] border-transparent text-black font-bold" 
            : "bg-transparent border border-white text-white font-normal hover:bg-[#FF6600] hover:border-transparent hover:text-black hover:font-bold"
        }`}
        data-testid="filter-all"
      >
        TODOS
      </button>
      
      {projectCategories.map((category) => {
        const isActive = selectedCategory === category.value;
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`transition-all duration-300 rounded-[25px] px-[20px] py-[8px] cursor-pointer text-sm md:text-base ${
              isActive 
                ? "bg-[#FF6600] border-transparent text-black font-bold" 
                : "bg-transparent border border-white text-white font-normal hover:bg-[#FF6600] hover:border-transparent hover:text-black hover:font-bold"
            }`}
            data-testid={`filter-${category.value}`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
