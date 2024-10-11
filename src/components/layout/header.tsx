import { CheckboxUI } from "@/components/form/checkbox";
import { SelectUI } from "@/components/form/select";
import { Button } from "@/components/ui/button";
import { months, years } from "@/constants";

export const Header = () => {
  return (
    <header>
      <div className="w-full flex items-center justify-center gap-2 flex-col sm:flex-row">
        <div className="flex gap-3 flex-col items-center sm:flex-row">
          <div className="flex gap-2 sm:px-0">
            <SelectUI
              options={months.map((month) => ({ label: month, value: month }))}
              placeholder="Selecione um mês"
            />
            <SelectUI
              options={years.map((year) => ({ label: year, value: year }))}
              placeholder="Selecione um ano"
            />
          </div>

          <CheckboxUI label="Busca anual" />
        </div>
        <Button>Buscar</Button>
      </div>
    </header>
  );
};
