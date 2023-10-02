function volume_sphere() {
    //Write your code here
    // Calculate the volume of a sphere
    const form = document.getElementById('MyForm');
    const volume = form.elements.volume;
    const radius = parseFloat(form.elements.radius.value);
    
    if (!isNaN(radius)) {
        const ans = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume.value = ans.toFixed(2); // Round to two decimal places
    } else {
        volume.value = ''; // Clear the volume input if the radius is not a valid number
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
