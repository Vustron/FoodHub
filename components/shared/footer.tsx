import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="grid w-full grid-cols-2 bg-hero/30 px-4 py-8 md:grid-cols-4 md:px-12">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Menu</h2>
            <p className="text-sm text-neutral-500">Home</p>
            <p className="text-sm text-neutral-500">Why Choose</p>
            <p className="text-sm text-neutral-500">Special Menu</p>
            <p className="text-sm text-neutral-500">Regular Food</p>
            <p className="text-sm text-neutral-500">Special Chefs</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Help</h2>
            <p className="text-sm text-neutral-500">Privacy</p>
            <p className="text-sm text-neutral-500">Terms & Condition</p>
            <p className="text-sm text-neutral-500">Policy</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="text-sm text-neutral-500">+000 0000 0000</p>
            <p className="text-sm text-neutral-500">info@FoodHub.com</p>
            <p className="text-sm text-neutral-500">1234 New Street, Earth</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Subscribe Our Newsletter</h2>
            <div className="flex w-full items-center justify-center rounded-md border-2 border-hero">
              <input
                type="text"
                placeholder="Enter your Email"
                className="h-full w-full border-none bg-transparent pl-4 text-sm text-neutral-500 outline-none"
              />
              <Button className="rounded-br-none rounded-tr-none bg-hero transition hover:scale-110 hover:bg-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-hero py-8">
          <p className="text-center text-xs font-semibold text-black">
            &copy; 2024 FoodHub, Inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
