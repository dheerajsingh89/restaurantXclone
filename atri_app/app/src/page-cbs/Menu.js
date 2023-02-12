import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex3Cb() {
	const onClick = useCallback(callbackFactory("Flex3", "Menu", "/Menu", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox4Cb() {
	const onClick = useCallback(callbackFactory("TextBox4", "Menu", "/Menu", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}