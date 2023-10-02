function volume_sphere() {
    //Write your code here
    // Calculate the volume of a sphere
    const form = document.getElementById('MyForm');
    const volume = document.getElementById('volume');
    const radius = parseFloat(document.getElementById('radius').value);
    
    if (!isNaN(radius)) {
        const ans = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume.value = ans.toFixed(2);
    } else {
        volume.value = ''; 
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
