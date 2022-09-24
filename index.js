fetch("https://api.spacexdata.com/v4/launches").then((data)=>{
return data.json();
}).then((dataObj)=>{
let tableData = "";
dataObj.map((values)=>{
    if(values.success != null){
    tableData += `<tr>
    <td>${values.date_local}</td>
    <td>${values.name}</td>
    <td>${values.flight_number}</td>
    <td>${values.rocket}</td>
    <td>${values.details? values.details:"No description is available to show"}</td>
    <td>${values.success == true? "Success" : "Failed"}</td>
    <td><img src="${values.links.patch.small}"></td>
    </tr>`
    }
});
document.getElementById("tdata").
innerHTML = tableData
$(document).ready( function () {
    $('#myTable').DataTable({
      pagingType: 'full_numbers'
    });
} );
})