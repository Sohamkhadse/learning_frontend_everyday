// setInterval(()=>{
//     console.log("hello")
// },[10000])

// setTimeout(()=>{
//     console.log("worked")
// },5000)

   let container = document.getElementById("container");

        setTimeout(() => {
            let img = document.createElement("img");
            img.src = "./house4.jpg";
            img.width = 500;

            img.addEventListener("click", () => {
                img.style.display = "none";
            });

            container.appendChild(img);
        }, 2000);