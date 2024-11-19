import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";

export function DiagnosticForm({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    age: "",
    marital_status: "",
    education_level: "",
    num_children: "",
    smoking_status: "",
    physical_activity: "",
    employment_status: "",
    alcohol_consumption: "",
    dietary_habits: "",
    sleep_patterns: "",
    history_mental_illness: "",
    history_substance_abuse: "",
    family_history: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (key: string, value: any) => {
    const newValue = value instanceof Set ? Array.from(value)[0] : value;
    setFormData((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      Age: formData.age,
      "Marital Status": formData.marital_status,
      "Education Level": formData.education_level,
      "Number of Children": formData.num_children,
      "Smoking Status": formData.smoking_status,
      "Physical Activity Level": formData.physical_activity,
      "Employment Status": formData.employment_status,
      "Alcohol Consumption": formData.alcohol_consumption,
      "Dietary Habits": formData.dietary_habits,
      "Sleep Patterns": formData.sleep_patterns,
      "History of Mental Illness": formData.history_mental_illness,
      "History of Substance Abuse": formData.history_substance_abuse,
      "Family History of Depression": formData.family_history,
    };

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const result = await response.json();

      const prediction = result?.result || "No prediction result available";
      toast.success(`Resultado de la predicción: ${prediction}`);
    } catch (error) {
      toast.error(
        "Error al hacer la solicitud: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isKeyboardDismissDisabled={true}
        scrollBehavior={"inside"}
        className="mx-auto w-full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Análisis de Depresión
              </ModalHeader>
              <ModalBody>
                <div>
                  <form id="predictionForm" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input
                          id="age"
                          type="number"
                          label="Edad"
                          labelPlacement="outside"
                          placeholder="Ingresa tu edad"
                          description="Rango de 5 a 80"
                          value={formData.age}
                          onChange={handleInputChange}
                          isRequired
                          name="age"
                        />
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="marital_status"
                          labelPlacement="outside"
                          label="Estado Civil"
                          placeholder="Selecciona tu estado civil"
                          name="marital_status"
                          selectedKeys={[formData.marital_status]}
                          onSelectionChange={(value) =>
                            handleSelectChange("marital_status", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Casado
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Viudo
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Divorciado
                          </SelectItem>
                          <SelectItem key="3" value="3">
                            Soltero
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="education_level"
                          labelPlacement="outside"
                          label="Nivel Educativo"
                          placeholder="Selecciona tu nivel educativo"
                          name="education_level"
                          selectedKeys={[formData.education_level]}
                          onSelectionChange={(value) =>
                            handleSelectChange("education_level", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Grado
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Secundaria
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Maestria
                          </SelectItem>
                          <SelectItem key="3" value="3">
                            Tecnico
                          </SelectItem>
                          <SelectItem key="4" value="4">
                            Doctorado
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Input
                          id="num_children"
                          type="number"
                          label="Numero de Hijos"
                          labelPlacement="outside"
                          placeholder="Selecciona tu numero de hijos"
                          description="Rango de 0 a 4"
                          value={formData.num_children}
                          onChange={handleInputChange}
                          isRequired
                          name="num_children"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Select
                          id="smoking_status"
                          labelPlacement="outside"
                          label="Estatus de Fumador"
                          placeholder="Selecciona tu estatus de fumador"
                          name="smoking_status"
                          selectedKeys={[formData.smoking_status]}
                          onSelectionChange={(value) =>
                            handleSelectChange("smoking_status", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            No Fumador
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Exfumador
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Actual
                          </SelectItem>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Select
                          id="physical_activity"
                          labelPlacement="outside"
                          label=" Nivel de Actividad Física"
                          placeholder="Selecciona tu nivel actividad"
                          name="physical_activity"
                          selectedKeys={[formData.physical_activity]}
                          onSelectionChange={(value) =>
                            handleSelectChange("physical_activity", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Activo
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Sedentario
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Moderado
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="employment_status"
                          labelPlacement="outside"
                          label="Estado Laboral"
                          placeholder="Selecciona tu estatus laboral"
                          name="employment_status"
                          selectedKeys={[formData.employment_status]}
                          onSelectionChange={(value) =>
                            handleSelectChange("employment_status", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Desempleado
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Empleado
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="alcohol_consumption"
                          labelPlacement="outside"
                          label="Consumo de Alcohol"
                          placeholder="Selecciona tu consumo"
                          name="alcohol_consumption"
                          selectedKeys={[formData.alcohol_consumption]}
                          onSelectionChange={(value) =>
                            handleSelectChange("alcohol_consumption", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Bajo
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Moderado
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Alto
                          </SelectItem>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Select
                          id="dietary_habits"
                          labelPlacement="outside"
                          label="Hábitos Alimenticios"
                          placeholder="Selecciona tu habito alimenticio"
                          name="dietary_habits"
                          selectedKeys={[formData.dietary_habits]}
                          onSelectionChange={(value) =>
                            handleSelectChange("dietary_habits", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Moderado
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            No Saludables
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Saludables
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="sleep_patterns"
                          labelPlacement="outside"
                          label="Patrones de Sueño"
                          placeholder="Selecciona tu patron"
                          name="sleep_patterns"
                          selectedKeys={[formData.sleep_patterns]}
                          onSelectionChange={(value) =>
                            handleSelectChange("sleep_patterns", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            Pobre
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Regular
                          </SelectItem>
                          <SelectItem key="2" value="2">
                            Bueno
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="history_mental_illness"
                          labelPlacement="outside"
                          label="Historial de Enfermedades Mentales"
                          placeholder="Seleccionar tu historial"
                          name="history_mental_illness"
                          selectedKeys={[formData.history_mental_illness]}
                          onSelectionChange={(value) =>
                            handleSelectChange("history_mental_illness", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            No
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Si
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Select
                          id="history_substance_abuse"
                          labelPlacement="outside"
                          label=" Historial de Abuso de Sustancias"
                          placeholder="Seleccionar tu historial"
                          name="history_substance_abuse"
                          selectedKeys={[formData.history_substance_abuse]}
                          onSelectionChange={(value) =>
                            handleSelectChange("history_substance_abuse", value)
                          }
                          isRequired
                        >
                          <SelectItem key="0" value="0">
                            No
                          </SelectItem>
                          <SelectItem key="1" value="1">
                            Si
                          </SelectItem>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Select
                        id="family_history"
                        labelPlacement="outside"
                        label="Historial Familiar de Depresión"
                        placeholder="Seleccionar tu historial"
                        name="family_history"
                        selectedKeys={[formData.family_history]}
                        onSelectionChange={(value) =>
                          handleSelectChange("family_history", value)
                        }
                        isRequired
                      >
                        <SelectItem key="0" value="0">
                          No
                        </SelectItem>
                        <SelectItem key="1" value="1">
                          Si
                        </SelectItem>
                      </Select>
                    </div>

                    <div className="mt-5 flex justify-end space-x-2">
                      <Button
                        variant="flat"
                        className="text-black font-medium bg-red-500"
                        onPress={() => onOpenChange(false)}
                      >
                        Cerrar
                      </Button>
                      <Button
                        className="text-white bg-black font-medium"
                        variant="flat"
                        type="submit"
                        color="default"
                      >
                        Enviar
                      </Button>
                    </div>
                  </form>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
