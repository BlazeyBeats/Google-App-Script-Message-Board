const GASURL = "https://script.google.com/macros/s/AKfycbzsBQXQ46gQKMAspULCCZ2R8CXjXuERW1Ab7hHWvuASry_UnNdM/exec";
const getDataURL = "https://script.google.com/macros/s/AKfycbxIhjogmCFUNBn8PLXClZvLycArkGkYqFpolLSnNqnCw4lTANM/exec";
let imgAry = new Array();
let html;


$(document).ready(()=> {
	
	console.log("I'm ready!");
	readData();
	$('.btn-primary').click((event)=> {
		writeData();
	});
	
	$.get(getDataURL,function(data){
        imgAry = data;
        setData();
    });
});


function setData(){
    let tmp = $('#template01');
    for(var i=0;i<imgAry.length;i++){
        console.log(imgAry[i]);
        let htmlCont = tmp.html();
		htmlCont = htmlCont.replace("ABC",imgAry[i][1]);
		htmlCont = htmlCont.replace("DEF",imgAry[i][2]);
        $('#show').append(htmlCont);
    }
}


let writeData = ()=> {
	let param = new Object();
	param.method = $('input[name="method"]').val();
	param.url = "https://docs.google.com/spreadsheets/d/1VnBvY9KClZCOIKEe0hZtpwUrFLvfEsK7sNlxqn6k5N4/edit#gid=0";
	param.tag = "工作表1";
	var namecheck = $('input[name="name"]').val();
	if (namecheck == "") {
		param.name = 'Anonymous'
	  } else {
		param.name = $('input[name="name"]').val();
	  }	
	param.score = $('input[name="score"]').val();
	console.log(param);
	$.post(GASURL, param, (data)=> {
		console.log(data);
	});
}

let readData = ()=>{
	let param = new Object();
	param.method = "read1";
	param.url = "https://docs.google.com/spreadsheets/d/1VnBvY9KClZCOIKEe0hZtpwUrFLvfEsK7sNlxqn6k5N4/edit#gid=0";
	param.tag = "工作表1";
	$.post(GASURL, param, (data)=> {
		console.log(data);
	});
}
