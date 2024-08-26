document.addEventListener('DOMContentLoaded', function() {
    fetch('/users')
        .then(response => response.json())
        .then(data => {
            const usersDiv = document.getElementById('users');
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.textContent = `${user.name} (${user.email})`;
                usersDiv.appendChild(userDiv);
            });
        });
});
