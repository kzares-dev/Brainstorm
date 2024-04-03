import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import SqetchIdeas from './SqetchIdeas';

export default function SqetchsModal() {

    return (
        <Drawer >
            <DrawerTrigger
                className="flex lg:hidden flex-row items-center gap-3 bg-n-6 border border-slate-500 shadow-md px-4 py-3 rounded-md font-sora text-2xl font-bold font-code text-[#EFBC9B] ">
                Take a note
            </DrawerTrigger>
            <DrawerContent className="h-[50vh] px-5 ">
                <SqetchIdeas />
            </DrawerContent>
        </Drawer>
    )
}