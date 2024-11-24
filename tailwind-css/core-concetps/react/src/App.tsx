export default function App() {
  return (
    <div>
      <form className="flex flex-col gap-4 max-w-sm mx-auto">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="rounded-md border-2 p-2 outline-none focus:outline-none peer/name text-black"
        />
        <p className="text-red-500 hidden peer-invalid/name:block">
          Name is required.
        </p>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="rounded-md border-2 p-2 outline-none focus:outline-none peer/email text-black  valid:text-green-500"
        />

        <p className="text-red-500 hidden peer-invalid/email:block">
          Email is required. Please enter a valid email address.
        </p>

        <label htmlFor="">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="rounded-md border-2 p-2 outline-none focus:outline-none  text-black peer/username "
          placeholder="Username valid:text-green-500"
        />

        <p className="text-red-500 hidden">Username is required.</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
