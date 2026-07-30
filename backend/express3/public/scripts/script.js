// window.alert("bro welcome")

// let element = document.getElementById("deletebtn");

// element.addEventListener("click",(event)=>{
//   window.alert("Button clicked");
// })

const buttons = document.querySelectorAll(".deletebtn");

buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {

        const id = event.target.dataset.id;

        try {
            const response = await fetch(`/api/delete/${id}`, {
                method: "DELETE"
            });

            const data = await response.json();

            console.log(data);

            window.location.reload();

        } catch (error) {
            console.log(error);
        }

    });
});