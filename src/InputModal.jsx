
function InputModal ({saveUser}){


        

    function registerUser(){
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName= document.getElementById("lastName").value;
        const userSex = document.querySelector('input[name="userSex"]:checked')?.value;
        const Age = document.getElementById("userAge").value;
        const userEmail= document.getElementById("userEmail").value;
        const registerAccountForm= document.getElementById("registerAccountForm");
        
        

        const userData = {
            firstName,
            middleName,
            lastName,
            userSex,
            Age,
            userEmail
        }
        if(firstName ==="" || middleName ==="" || lastName ==="" || userSex ==="" || Age ==="" || userEmail ===""){
            alert("fill all inputs");
            return;
        }

        saveUser(userData);
        registerAccountForm.reset();

    }

    return(<>

    <form action="" id='registerAccountForm' onSubmit={registerUser}>
        <h1>Register User</h1>


        <label htmlFor="firstName">FirstName</label>
        <input type="text" name="firsName" id="firstName"/>
        <p className="errorMessage"></p><br />

        <label htmlFor="middleName">Middle Name</label>
        <input type="text" name="middleName" id="middleName"  />
        <input type="checkbox" name="noMiddleName" id="noMiddleName" onChange={function(e){
            const middleName = document.getElementById("middleName");
            
            if(e.target.checked){
                middleName.disabled = true;
                middleName.value = "N/A";
            }else{
                middleName.disabled = false;
                middleName.value = "";
                middleName.focus();
            }
        }}/>
        <p className="errorMessage"></p><br />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <p className="errorMessage"></p><br />
    
        <label htmlFor="">Sex</label><br />
        <label htmlFor="Male">Male</label>
        <input type="radio" name="userSex" id="Male" value="Male"/>
        <label htmlFor="Female">Female</label>
        <input type="radio" name="userSex" id="Female" value="Female"/>
        <p className="errorMessage"></p><br />

        <label htmlFor="userAge">Age</label>
        <input type="number" name="userAge" id="userAge" />
        <p className="errorMessage"></p><br />
        
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="userEmail" id="userEmail"/>
        <p className="errorMessage"></p><br />

        <button type="submit">Register Account</button>
    </form>
    </>)

}

export default InputModal