import { useState } from "react";
import { client } from "../constants";
import type { ResponseType } from "../constants";

export default function Home() {
  const [data, setData] = useState<
    Awaited<ReturnType<ResponseType["json"]>> | undefined
  >();

  async function sendRequest() {
    try {
      const res = await client.hello.$get();
      if (!res.ok) {
        console.log("Error fetching data");
        return;
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => {
          sendRequest();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Click me
      </button>
      {data && <div>{data.message}</div>}
      <PostReq />
    </div>
  );
}

function PostReq() {
  const [val, setVal] = useState("");
  const [data, setData] = useState<Awaited<ReturnType<ResponseType["json"]>>>();

  async function sendRequest(name: string) {
    try {
      const res = await client.hello.$post({
        json: {
          name,
        },
      });
      if (!res.ok) {
        console.log("Error fetching data");
        return;
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-36">
      <fieldset className="flex gap-4">
        <input
          className="w-60 outline rounded-2xl py-2 px-4"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            if (val.length > 0) {
              sendRequest(val);
            }
          }}
        >
          Send Request
        </button>
      </fieldset>
      {data && <div>{data.message}</div>}
    </div>
  );
}
