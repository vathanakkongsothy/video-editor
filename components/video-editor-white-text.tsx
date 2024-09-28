'use client'

import { SetStateAction, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, SkipBack, SkipForward, Scissors, Plus, Volume2, Film, Music, Image as ImageIcon, Wand2, Layers2, Menu, Search, Bell, Upload, ChevronDown, Download } from "lucide-react"

export function VideoEditorWhiteText() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedPlatform, setSelectedPlatform] = useState('Select Platform')
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)
  const [exportFormat, setExportFormat] = useState('Select Format')

  const simulateUpload = (platform: SetStateAction<string>) => {
    setIsUploading(true)
    setUploadProgress(0)
    setSelectedPlatform(platform)

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prevProgress + 10
      })
    }, 500)
  }

  const simulateExport = (format: SetStateAction<string>) => {
    setIsExporting(true)
    setExportProgress(0)
    setExportFormat(format)

    const interval = setInterval(() => {
      setExportProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setIsExporting(false)
          return 100
        }
        return prevProgress + 5
      })
    }, 300)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      <header className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-primary">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-primary animate-pulse" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">VideoForge</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-primary">Projects</Button>
          <Button variant="ghost" className="text-white hover:text-primary">Templates</Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8 ring-2 ring-primary">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 bg-black/30 backdrop-blur-md p-6 space-y-6 overflow-y-auto">
          <h2 className="text-xl font-semibold text-white">Project Assets</h2>
          <div className="space-y-3">
            <Card className="bg-white/5 hover:bg-white/10 transition-colors">
              <CardContent className="p-3 flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Film className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Video 1.mp4</p>
                  <p className="text-xs text-gray-300">00:02:30 • 1080p</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 hover:bg-white/10 transition-colors">
              <CardContent className="p-3 flex items-center space-x-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Music className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Audio 1.mp3</p>
                  <p className="text-xs text-gray-300">00:03:45 • 320kbps</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 hover:bg-white/10 transition-colors">
              <CardContent className="p-3 flex items-center space-x-3">
                <div className="bg-yellow-500/20 p-2 rounded-full">
                  <ImageIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Image 1.jpg</p>
                  <p className="text-xs text-gray-300">4K • 2.3MB</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white"><Plus className="mr-2 h-4 w-4" /> Add Asset</Button>
        </div>
        <div className="flex-1 flex flex-col p-6 space-y-6">
          <div className="aspect-video bg-black rounded-xl overflow-hidden relative group shadow-2xl">
            <video className="w-full h-full object-cover">
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                        <SkipBack className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">Previous Frame</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">{isPlaying ? 'Pause' : 'Play'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                        <SkipForward className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">Next Frame</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-4">
                <Slider
                  className="w-full"
                  defaultValue={[0]}
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Slider
                        className="w-24"
                        defaultValue={[volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setVolume(value[0])}
                      />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="secondary" className="bg-white/5 hover:bg-white/10 text-white"><Scissors className="mr-2 h-4 w-4" /> Cut</Button>
                <Button variant="secondary" className="bg-white/5 hover:bg-white/10 text-white">Trim</Button>
                <Button variant="secondary" className="bg-white/5 hover:bg-white/10 text-white">Split</Button>
              </div>
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Upload className="mr-2 h-4 w-4" />
                      {isUploading ? 'Uploading...' : 'Upload'}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => simulateUpload('YouTube')} className="text-white">
                      YouTube
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => simulateUpload('Instagram')} className="text-white">
                      Instagram
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => simulateUpload('TikTok')} className="text-white">
                      TikTok
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-secondary hover:bg-secondary/90 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      {isExporting ? 'Exporting...' : 'Export'}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => simulateExport('MP4')} className="text-white">
                      MP4
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => simulateExport('MOV')} className="text-white">
                      MOV
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => simulateExport('AVI')} className="text-white">
                      AVI
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {isUploading && (
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2 text-white">
                  <span>Uploading to {selectedPlatform}</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            )}
            {isExporting && (
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2 text-white">
                  <span>Exporting as {exportFormat}</span>
                  <span>{exportProgress}%</span>
                </div>
                <Progress value={exportProgress} className="w-full" />
              </div>
            )}
            <div className="bg-black/30 backdrop-blur-md h-40 rounded-xl relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/20 border-r-2 border-primary"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-24 flex items-center px-4 space-x-2 overflow-x-auto">
                  <div className="flex-shrink-0 w-32 h-20 bg-blue-500/30 rounded-md border border-blue-500/50"></div>
                  <div className="flex-shrink-0 w-48 h-20 bg-green-500/30 rounded-md border border-green-500/50"></div>
                  <div className="flex-shrink-0 w-40 h-20 bg-yellow-500/30 rounded-md border border-yellow-500/50"></div>
                  <div className="flex-shrink-0 w-56 h-20 bg-purple-500/30 rounded-md border border-purple-500/50"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/50 flex items-center justify-between px-4 text-xs text-white">
                <span>00:00</span>
                <span>01:30</span>
                <span>03:00</span>
                <span>04:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 bg-black/30 backdrop-blur-md p-6">
          <Tabs defaultValue="effects" className="h-full flex flex-col">
            <TabsList className="w-full bg-white/5 p-1 rounded-lg">
              <TabsTrigger value="effects" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white">Effects</TabsTrigger>
              <TabsTrigger value="transitions" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white">Transitions</TabsTrigger>
            </TabsList>
            <TabsContent value="effects" className="flex-1 mt-6 space-y-3">
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Wand2 className="mr-2 h-4 w-4 text-purple-400" /> Blur
              </Button>
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Wand2 className="mr-2 h-4 w-4 text-blue-400" /> Brightness
              </Button>
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Wand2 className="mr-2 h-4 w-4 text-green-400" /> Contrast
              </Button>
            </TabsContent>
            <TabsContent value="transitions" className="flex-1 mt-6 space-y-3">
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Layers2 className="mr-2 h-4 w-4 text-orange-400" /> Layers2
              </Button>
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Layers2 className="mr-2 h-4 w-4 text-pink-400" /> Dissolve
              </Button>
              <Button variant="outline" className="w-full justify-start bg-white/5 hover:bg-white/10 border-0 text-white">
                <Layers2 className="mr-2 h-4 w-4 text-yellow-400" /> Wipe
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}