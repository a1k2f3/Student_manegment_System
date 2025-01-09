import axios from 'axios';
const deleteuser = async ({email}) => {
    // e.preventDefault();
    setLoading(true); // Start loading state
    const token = localStorage.getItem('authToken'); // Get token from localStorage

    if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
    }

    
    try {
        const response = await fetch(`http://localhost:3000/deleteuser?email=${email}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in headers
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorDetails = await response.json(); // Parse error details
            throw new Error(`Failed to delete user: ${errorDetails.message || response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log('Delete user response:', data);

        // Optionally show a success message to the user
        alert('User deleted successfully.');

        // Reload page after deleting the user
        window.location.reload();
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('An error occurred while deleting the user. Please try again.');
    } finally {
        setLoading(false); // End loading state
    }
};
