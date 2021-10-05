#cs ----------------------------------------------------------------------------

 AutoIt Version: 3.3.14.5
 Author:         tnordberg

 Script Function:
	Template AutoIt script.

#ce ----------------------------------------------------------------------------

#include <AutoItConstants.au3>

; Delay 60 seconds before continuing
Sleep(60000)

; Move mouse over CochImplant `Activate mic` toggle then click.
WinActivate("EHS Cochlear Implant Simulator", "")
MouseClick($MOUSE_CLICK_LEFT, 270, 318, 5)

; Delay 2 seconds before continuing
Sleep(2000)

; Ensure Stele has focus by clicking it.
WinActivate("stele", "")
MouseClick($MOUSE_CLICK_LEFT, 960, 318, 5)