import React from 'react'


const CreateAccount = () => {
    return (
        <div>
            <form>
    
          <input
            type="text"
            placeholder="Juan Pérez Pérez"
            name="name"
            value={name}
          />
       
      

       
          <input 
          type="num" 
          placeholder="12.345.678-9" 
          value={rut}
          />
        
          <select>
            <option value="select"></option>
            <option value="fonasa">Fonasa</option>
            <option value="isapre">Isapre</option>
          </select>
      
          <input 
          type="num" 
          placeholder="+56"
          value={phone}
          />
      
          <input
            type="email"
            placeholder="juanperezprez@gmail.com"
            name="email"
            value={email}
          />
      
          <input
            type="password"
            placeholder="******"
            name="password"
            value={password}
          />
      
          <button 
          type="submit"
          >     
          </button>

        <button 
        type="button"> 
        </button>
      </form>
        </div>
    )
}

export default CreateAccount
