'use client'

import { formatBytes } from '@/app/utils/format-bytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Trash2, UploadCloud } from 'lucide-react'
import { Button } from '../../Button'
import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(file => {
        return <FileItem key={file.name} name={file.name} size={file.size} />
      })}
    </div>
  )
}
