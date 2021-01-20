// button Eventlistener to listen to save button
var btn = document.getElementById("save");
btn.onclick = function save(){
	event.preventDefault();

	//getting the value/content of text area
	var content = document.querySelector("#text").value;

	//Blob object which is a kind of data type holding the data to store in a file
	//it is responsible for holding data
	var blob= new Blob([content],{type:"text/plain"});

	//I guess its the url of the page i.e the text file of the content :)
	var saveUrl = window.URL.createObjectURL(blob);
	

	//getting the file name fro the text field
	var fileName= document.getElementById("flname").value;

	//Link Creation for the download opeartion (Not Sure)
	var downloadEle = document.createElement('a');
	downloadEle.download=fileName;
	downloadEle.innerHTML = "Download FIle";
	downloadEle.href=saveUrl;
	downloadEle.onclick= destroyClickedElement;
	downloadEle.style.display="none"
	document.body.appendChild(downloadEle);
	downloadEle.click();
}
function destroyClickedElement(event){
	document.body.removeChild(event.target);
}

//button for selecting the file to open from local device/machine

var btn2=document.querySelector('#open');
btn2.onclick=function fileOpen(){
	
	//getting the file to read
	var fileToRead = document.getElementById('fileLoad').files[0];
	var fileReader = new FileReader();
	

	//the file reader
	fileReader.onload = function(event){

		//geting the text content 
		var filetext = event.target.result;

		//storing/displaying the textarea 
		document.getElementById("text").value= filetext;


	};

	fileReader.readAsText(fileToRead,"UTF-8");
}

