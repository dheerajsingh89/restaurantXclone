import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex3Cb, useTextBox4Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex3Props = useStore((state)=>state["Menu"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Menu"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const TextBox4Props = useStore((state)=>state["Menu"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Menu"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()

  return (<>
  <Flex2 className="p-Menu Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox2 className="p-Menu TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Flex2>
  </>);
}
