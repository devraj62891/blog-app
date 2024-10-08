import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex  p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-2">
        {/* left */}
        <div className=" flex-1">
          <Link to="/" className="  text-4xl font-bold dark:text-white">
            <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Devraj's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project you can sign up using your email adn
            passswsorfd or with google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-4">
            <div className="">
              <Label value="username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span>Have an acc?</span>
            <Link to="/sign-in" className="text-blue-400">
              Singn in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
