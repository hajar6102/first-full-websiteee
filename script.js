

document.addEventListener("DOMContentLoaded", function() {

    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // duration in milliseconds =2seconds

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target'); //the + to convert the string if exist to number.
        const increment = target / (duration / 10); // calculate increment per 10ms interval
        
        let count = 0;

        const updateCounter = () => {
            count += increment;
            if (count < target) { // ??? count = 7.1 < 1420
                counter.textContent = Math.ceil(count) + "+"; //8
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
});

const d = new Date();
document.getElementById("DATE").innerHTML = d.toDateString();
 

// for(count1=0;count1<1240;count1++){

//     let club = document.querySelector("#club"); //club=0 -- club=1

//     let content=(count)=>{
//         return()=>{
//         club.innerHTML=count + "+"; //club=0+ -- club=1+
//         };
//     };
    
//     setTimeout(content(count1),20*count1);
// }
//not working anymore bc we smashed the id #club
 