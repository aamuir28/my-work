function FormField({name, label, value, onChange, type='text', selectOptions}) {
    return (
      <div className="row mb-3">
        <label htmlFor={name} className="col-sm-2 col-form-label">{label}:</label>
        <div className="col-sm-10">
          {type === 'select' ? (
            <select className="form-control"  id={name} name={name}
              value={value} onChange={onChange}>
                <option value=""></option>
                {selectOptions.map(so => <option key={so.id} value={so.id}>{so.name}</option>)}
            </select>
          ) : (
            <input type={type} className="form-control" id={name} name={name}
              value={value} onChange={onChange} />
          )}
        </div>
      </div>
    );
  }
  
  export default FormField;