import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

export default function SelectIngredient({options, isMulti, onChangeFunction, name}) {

    const adjOptions = options.map((el) => {
      let keyName = {
        "label": el.name,
        "value": el.id
      }
      return keyName
    })

  return (  
    <>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti={isMulti}
          options={adjOptions}
          onChange={onChangeFunction}
          name={name}
        />
    </>
  );
}
