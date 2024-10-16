import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Overlay = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Overlay</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Overlay Example</DialogTitle>
                    <DialogDescription>
                        This is an example of an overlay using the Dialog component.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input id="name" placeholder="John Doe" className="col-span-3" />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}