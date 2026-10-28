const HeaderComponent = () =>{
    return (
         <>
 <section id="formContainer">
        <form id="studentForm">
            <div class="input-field">
                <label htmlFor="name">STUDENT NAME</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div class="input-field">
                <label htmlFor="program">PROGRAM</label>
                <input type="text" name="program" id="program"/>
            </div>
            <div>
                <button>Add Student</button>
            </div>
        </form>
        
    </section>
        </>

 
    )
}

export default HeaderComponent;