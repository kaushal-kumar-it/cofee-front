"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, File, X, Copy, Check } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function UploadSection() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [shareLink, setShareLink] = useState("")
  const [copied, setCopied] = useState(false)

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const simulateUpload = () => {
    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          setShareLink("https://coffeeshare.com/f/abc123xyz")
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Drop, Upload, Share</h2>
            <p className="text-muted-foreground text-lg">
              Drag and drop your files or click to browse. It's that simple.
            </p>
          </div>

          <Card className="p-8">
            {!shareLink ? (
              <>
                <div
                  className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  onDrop={(e) => {
                    e.preventDefault()
                    handleFileSelect(e.dataTransfer.files)
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Drop files here or click to browse</h3>
                  <p className="text-muted-foreground">Support for any file type up to 2GB</p>
                  <input
                    id="file-input"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFileSelect(e.target.files)}
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-foreground">Selected Files:</h4>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <File className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{file.name}</span>
                          <span className="text-xs text-muted-foreground">
                            ({(file.size / 1024 / 1024).toFixed(1)} MB)
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {files.length > 0 && (
                  <div className="mt-6">
                    {uploading ? (
                      <div className="space-y-4">
                        <Progress value={uploadProgress} className="w-full" />
                        <p className="text-center text-sm text-muted-foreground">Uploading... {uploadProgress}%</p>
                      </div>
                    ) : (
                      <Button onClick={simulateUpload} className="w-full bg-primary hover:bg-primary/90" size="lg">
                        Upload & Share Files
                      </Button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mx-auto">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Files uploaded successfully!</h3>
                  <p className="text-muted-foreground">Your files are ready to share. Copy the link below.</p>
                </div>
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 bg-transparent text-sm text-foreground outline-none"
                  />
                  <Button variant="ghost" size="sm" onClick={copyLink} className="shrink-0">
                    {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFiles([])
                    setShareLink("")
                    setUploadProgress(0)
                  }}
                >
                  Upload More Files
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
