export default function Login(){
    return(
        <div className="bg-[#002029] h-full w-full">
            <div className="flex justify-center text-center p-40">
                <div 
                    className="border rounded-sm border-gray-500 border-radius w-100 bg-white p-6"
                >
                    <div className="text-base p-4">
                        <h1 className="text-center text-bold text-xl">Welcome !</h1>
                        
                    </div>
                    <div className="text-base pb-4">
                        <p>Username:</p>
                        <input className=" h-10 rounded-sm border border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"/>
                    </div>
                    <div className="text-base pb-4">
                        <p>Password:</p>
                        <input className=" h-10 rounded-sm border border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"/>
                    </div>
                    <div className="p-2">
                        <button className="bg-red-500 text-white h-10 px-3 py-2 border-radius rounded-md">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}