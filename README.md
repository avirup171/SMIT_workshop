# SMIT IOT Workshop by GDG Siliguri

## Welcome to all

Hello developers. This is the repo of the code files for the workshop conducted at SMIT, Sikkim. Thanks to all for attending the workshop. It was a great experience for us. 
For any problem, drop a mail to [Avirup Basu](mailto:avirup.basu@live.com?subject=[GitHub%20SMIT%20WORKSHOP])

### Structure of the repo

This repo has two main sections. 
* Code: Contains code files for Arduino and Node.js
* PPT: Contains presentation 


# Installation Guide for Node.js

## Using Linux
* First, we need to grab a Personal Package Archive (PPA). Normally this installation method will retrieve the most up-to-date version of node.
<pre>curl -sL https://deb.nodesource.com/setup | sudo bash - </pre>
* Next, update the package list
<pre>sudo apt-get update</pre>
* Install node
<pre>sudo apt-get install nodejs</pre>
* Install extra essentials for NPM (the node package manager).  Some of NPM's packages require this data
<pre>sudo apt-get install build-essential</pre>

## Using Mac
* First, we need to make sure we have XCode's developer packages installed.  XCode can be downloaded from the [apple store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) for free.
* Second, we need homebrew! Homebrew (very similar to Linux's apt-get) is a package manager for Mac.  This makes for an easy installation method via the command line.  
<pre>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</pre>
* Now that we have Homebrew installed, we can run the following:
<pre>brew install node</pre>
* Once finished, type the following to ensure that both NODE and NPM are installed
<pre>
node --version
npm --version
</pre>
* Each one of those last commands should print a new line in the terminal displaying some number in a format similar to "v4.2.1" or "1.4.7" (not those specific numbers)

## Using Windows
### For 32 bit
  [Click Here](https://nodejs.org/dist/v12.14.1/node-v12.14.1-x86.msi)
### For 64 bit
  [Click Here](https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi)


## UPDATE ON 22-02-2020

### Code files updated for node.js
Please visit the node.js folder under Code section to see it.  

  
