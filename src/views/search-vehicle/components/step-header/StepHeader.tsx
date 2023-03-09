import "./StepHeader.css";
import IconTable from "../../../../assets/icon-table.svg";
import IconCard from "../../../../assets/icon-card.svg";

interface Props {
  step: {
    step1: boolean;
    step2: boolean;
  };
  setOptions: React.Dispatch<
    React.SetStateAction<{
      plate: boolean;
      date: boolean;
      value: boolean;
    }>
  >;
  setStep: React.Dispatch<
    React.SetStateAction<{
      step1: boolean;
      step2: boolean;
    }>
  >;

  onSwitch: boolean;
  setonSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepHeader = ({
  step,
  setStep,
  setOptions,
  setonSwitch,
  onSwitch,
}: Props) => {
  const backOptions = () => {
    setStep({
      step1: true,
      step2: false,
    });
    setOptions({
      plate: false,
      date: false,
      value: false,
    });
  };

  const showTable = () => {
    setonSwitch(false);
  };

  const showCard = () => {
    setonSwitch(true);
  };

  return !step.step1 ? (
    <div className="header-step">
      <button className="button-step " onClick={backOptions}>
        Atras
      </button>

      <div className="switch">
        <div
          className={!onSwitch ? "switch-left-active" : "switch-left-no-active"}
          onClick={showTable}
        >
          <img src={IconTable} alt="icon-table"/>
        </div>
        <div
          className={
            !onSwitch ? "switch-right-no-active" : "switch-right-active"
          }
          onClick={showCard}
        >
          <img src={IconCard} alt="icon-card"/>
        </div>
      </div>
    </div>
  ) : (
    <p></p>
  );
};

export default StepHeader;
