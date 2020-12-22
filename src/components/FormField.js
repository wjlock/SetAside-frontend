function FormField(props) {
    return (
      <div>
        <label htmlFor={props.labelLink}>{props.displayLabel}</label>
        <input name={props.labelLink} value={props.value} onChange={props.handler} />
      </div>
    )
  }
  
  export default FormField