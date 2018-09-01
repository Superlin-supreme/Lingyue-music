window.onload = function () {
	var person_im = document.getElementById('person_im')
	var person_pass = document.getElementById('person_pass')
	var person_advice = document.getElementById('person_advice')
	var changepass_main = document.getElementById('changepass_main')
	var im_main = document.getElementById('im_main')
	var feedback_main = document.getElementById('feedback_main')

    person_im.onclick = function () {
    	im_main.style.display="block";
    	changepass_main.style.display="none";
    	feedback_main.style.display="none";
        person_im.style.color="white";
		person_im.style.background="blue";
		person_pass.style.color="rgb(128,128,128)";
		person_pass.style.background="none";
		person_advice.style.color="rgb(128,128,128)";
		person_advice.style.background="none";    	
    }


   person_pass.onclick = function () {
    	im_main.style.display="none";
    	changepass_main.style.display="block";
    	feedback_main.style.display="none";
        person_im.style.color="rgb(128,128,128)";
		person_im.style.background="none";
		person_pass.style.color="white";
		person_pass.style.background="blue";
		person_advice.style.color="rgb(128,128,128)";
		person_advice.style.background="none";    	
    }

    person_advice.onclick = function () {
    	im_main.style.display="none";
    	changepass_main.style.display="none";
    	feedback_main.style.display="block";
        person_im.style.color="rgb(128,128,128)";
		person_im.style.background="none";
		person_pass.style.color="rgb(128,128,128)";
		person_pass.style.background="none";
		person_advice.style.color="white";
		person_advice.style.background="blue";    	
    }
}
