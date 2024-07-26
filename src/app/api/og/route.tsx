import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const geistRegular = fetch(
  new URL("./Geist-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const geistSemiBold = fetch(
  new URL("./Geist-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const geistBold = fetch(new URL("./Geist-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Every day features with Next.js App Router.";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
          tw="flex flex-col w-full h-full items-center justify-center bg-white"
        >
          <span tw="flex items-center">
            <span
              tw="text-[50px] flex font-bold"
              style={{ fontFamily: "GeistBold" }}
            >
              NEXT
              <span
                style={{ fontFamily: "geistRegular" }}
                tw="font-normal text-[16px] self-end mb-[10px] text-gray-500"
              >
                .js
              </span>
            </span>
            <span tw="block mx-[10px] w-[2px] h-[30px] bg-gray-300"></span>
            <span
              tw="text-[30px] text-green-500 font-medium"
              style={{ fontFamily: "GeistSemiBold" }}
            >
              APP
            </span>
          </span>
          <p
            tw="text-[30px] mt-[40px] mb-[40px]"
            style={{ fontFamily: "GeistRegular" }}
          >
            {title}
          </p>
          <p tw="text-gray-600" style={{ fontFamily: "GeistRegular" }}>
            @dorji-dev
          </p>
        </div>
      ),
      {
        width: 843,
        height: 441,
        fonts: [
          {
            name: "GeistRegular",
            data: await geistRegular,
            style: "normal",
            weight: 400,
          },
          {
            name: "GeistSemiBold",
            data: await geistSemiBold,
            style: "normal",
            weight: 400,
          },
          {
            name: "GeistBold",
            data: await geistBold,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    // eslint-disable-next-line no-console
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
