import { http, createConfig } from "wagmi";
import { scrollSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(`${process.env.NEXT_PUBLIC_HTTP_RPC}`),
  },
});
