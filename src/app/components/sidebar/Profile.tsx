import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/LuisFelipeSalvarani.png"
        alt=""
        className="size-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="font-semibold text-sm text-zinc-700">
          Luis Felipe Salvarani
        </span>
        <span className="truncate text-sm text-zinc-500">
          felipe_salvarani@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
