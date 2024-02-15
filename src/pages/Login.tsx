export default function Login() {
    return (
        <div className="flex h-full">
            <div className="bg-zinc-800 basis-1/3 text-white p-10 flex flex-col">
                <div className="flex-1">
                    <h1 className="text-lg font-bold">Admin Starter Kit</h1>
                </div>
                <div className="space-y-2 text-sm">
                    <p>
                        Empower Your Enterprise with Admin Starter Kit SaaS Solutions That Unleash Creativity,
                        Foster Collaboration, and Inspire Progress.
                    </p>
                    <p >
                        Admin Starter Kit, Inc
                    </p>
                </div>
            </div>
            <div className="grow flex items-center justify-center">
                <div className="flex flex-col items-center space-y-6 w-[360px]">
                    <div className="w-full">
                        <h1 className="text-xl font-semibold">Welcome to Admin Starter Kit</h1>
                        <h1 className="text-lg font-semibold text-zinc-800">Sign into with your account</h1>
                    </div>
                    <div className="w-full space-y-3">
                        <div>
                            <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                            <input type="text" className="w-full border h-9 rounded-md px-3 py-1 text-sm" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm text-muted-foreground">Password</label>
                            <input type="password" className="w-full border h-9 rounded-md px-3 py-1 text-sm" />
                        </div>
                        <button className="w-full border h-9 rounded-md text-sm
                         bg-zinc-800 text-white hover:bg-transparent/70" >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}