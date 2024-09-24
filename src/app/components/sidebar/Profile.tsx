import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/LuisFelipeSalvarani.png"
        alt=""
        className="size-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Luis Felipe Salvarani
        </span>
        <span className="truncate text-sm text-zinc-500">
          felipe_salvarani@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
