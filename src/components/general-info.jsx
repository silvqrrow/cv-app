export default function GeneralInfo ({ onSubmitInfo }){
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        onSubmitInfo(formJson)
    }
    return <>
    <h2>General Info</h2>
    <form method="post" onSubmit={handleSubmit}>
        <label>
            Full Name <input name="fullName"/>
        </label>
        <label>
            E-mail <input name="email" type="email"/>
        </label>
        <label>
            Phone Number <input name="phoneNumber" type="tel"/>
        </label>
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
    </form>
    </>
}