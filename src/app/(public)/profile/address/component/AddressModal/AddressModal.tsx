import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface IProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

function AddressModal({ open, setOpen }: IProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thêm địa chỉ mới</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="space-y-2 flex flex-col">
            <label
              htmlFor="address"
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
            >
              Địa chỉ
            </label>
            <input
              className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
              id="address"
              placeholder="SỐ NHÀ, TÊN ĐƯỜNG, QUẬN/HUYỆN"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Hủy
          </Button>
          <Button onClick={() => setOpen(false)}>Lưu địa chỉ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddressModal;
