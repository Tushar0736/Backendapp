
document.getElementById('submit-btnn').addEventListener('click', (e)=>{
    e.preventDefault();

    const email = document.getElementById('usrmail').value;
    const password = document.getElementById('usrpassword').value;


    const logindetails={
        useremail: email,
        userpassword: password
    }

    const xhr = new XMLHttpRequest();

    const url= 'http://localhost:5000/login/' 

    xhr.open('POST', url);

    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 ) {
            
            // console.log( JSON.parse(xhr.response) )
             if(xhr.status === 200)
             {
                console.log('in 200 ready state')
                console.log( JSON.parse(xhr.responseText))
                
             
             }
             if(xhr.status === 404){
                console.log('in 404 ready state')
                console.log( JSON.parse(xhr.responseText))
             }
        }
        
    }
    

    xhr.send( JSON.stringify(logindetails) )

})