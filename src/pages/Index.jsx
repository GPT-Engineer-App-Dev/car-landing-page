import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold">Car Brand</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#models" className="hover:underline">Models</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Button>Get Started</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center space-y-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[400px]" />
        <h1 className="text-4xl font-bold">Experience the Future of Driving</h1>
        <p className="text-lg">Discover the latest models and innovations in automotive technology.</p>
        <Button>Explore Models</Button>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p>We are a leading car brand with a rich history of innovation and excellence.</p>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[400px]" />
      </section>

      {/* Models Section */}
      <section id="models" className="space-y-4">
        <h2 className="text-3xl font-bold">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Model 1</CardTitle>
              <CardDescription>Brief description of Model 1.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Some more details about Model 1.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Model 2</CardTitle>
              <CardDescription>Brief description of Model 2.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Some more details about Model 2.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Model 3</CardTitle>
              <CardDescription>Brief description of Model 3.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Some more details about Model 3.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="space-y-4">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-16 h-16" />
            <div>
              <p className="font-bold">Customer 1</p>
              <p>"Amazing experience with this car brand!"</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-16 h-16" />
            <div>
              <p className="font-bold">Customer 2</p>
              <p>"The best car I've ever owned."</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-16 h-16" />
            <div>
              <p className="font-bold">Customer 3</p>
              <p>"Exceptional quality and service."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Name" {...register("name")} />
          <Input placeholder="Email" {...register("email")} />
          <Textarea placeholder="Message" {...register("message")} />
          <Button type="submit">Submit</Button>
        </form>
        <div className="space-y-2">
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@carbrand.com</p>
          <p>Address: 123 Car St, Auto City, CA 12345</p>
        </div>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-full h-[400px]" />
      </section>

      {/* Footer */}
      <footer className="space-y-4 py-6 border-t">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-center">&copy; 2023 Car Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;