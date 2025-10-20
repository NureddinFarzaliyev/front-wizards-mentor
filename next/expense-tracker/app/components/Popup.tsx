import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ReactNode, useState } from "react";

export const Popup = ({
  button,
  content,
  closeButton,
}: {
  button: ReactNode;
  content: ReactNode;
  closeButton?: ReactNode;
}) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={open}>{button}</Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {content}
              {closeButton && (
                <div className="mt-2">
                  <Button onClick={close}>{closeButton}</Button>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
