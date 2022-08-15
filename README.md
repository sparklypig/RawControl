This library provides a function, rawControl() that allows you to easily handle asynchronous user input from the terminal.

There are three arguments, controls, dispBuff, and dflt (I may change the names for verbosity)
controls: A map of buffer strings to functions. When a key is pressed, it's buffer is compared to the object and its corresponding function is run
dispBuff (optional; defaults to false): A boolean that enables displaying the buffer of any key htat has not been assigned in controls
dflt (optional): A function that runs on every keypress (usually a screen refresh)

This library is intended for my own personal use. It and its functionality may change as my needs change and as I become a better programmer
