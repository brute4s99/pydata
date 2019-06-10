---
title: multi-booting
subTitle: at its best
category: "tech"
cover: cover.png
---

## INTRODUCTION

I am an Arch Linux user by day, but recently I needed constant access to Windows 10 OS to develop [KDE Connect](https://duckduckgo.com/?q=kde+connec) - an awesome project by some smart-working developers from across the globe, for Windows.

While working with the team, I also had to install Ubuntu to test a new release for the Ubuntu users.

> All this boils down to a system that already contains Arch Linux, to house Windows 10 and Ubuntu along, on a 500GB hard disk.
> 
> I have also mentioned a rookie mistake in this blog post, so do take it with a pinch of salt.


### CHALLENGE 1: One storage device, many partitions

> The thing is, there are many partitions required to have such a system, and legacy partitioning systems allow for just 4 at max. Enter UEFI, that allows any number of partitions on a single storage device.

<p align="center"><font color="green" size="3">STATUS:
 
 Arch Linux `OK`
 ;<font color="cyan"> Ubuntu `TO_BE_INSTALLED`</font>
 ;<font color="cyan"> Windows `TO_BE_INSTALLED`</font>
 </font></p>

### CHALLENGE 2: Getting Windows 10 media to boot in UEFI mode

> For this, I used Rufus to create my installation media, and supplied the latest Windows ISO recieved from the Media Creation Tool provided by Microsoft.

Luckily, Windows installed itself nicely **along** with Arch Linux, and I was able to dual boot just fine after the installation, with GRUB2 from Arch Linux.

<p align="center"><font color="green" size="4">STATUS:
 
 Arch Linux `OK`
 ;<font color="cyan"> Ubuntu `TO_BE_INSTALLED`</font>
 ; Windows `OK`
 </font></p>

## TRIPLE BOOT TIME!

I went for [Ubuntu 18.04 LTS](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes) here because it was the latest edition with [LTS](https://wiki.ubuntu.com/LTS).

> I simply installed it on a separate `ext4` partition at the end of my HDD (using that `something else` option).

I'm not sure what happened here, but it *might* have did something to my prior GRUB config managed by Arch Linux.

On next boot, the GRUB settings of Arch Linux showed up, which had options for Windows and Arch Linux.(no Ubuntu OS here)

### CHALLENGE 3: Get Ubuntu OS to boot

Then I went ahead and booted into Arch to run a `grub-mkconfig -o /boot/grub/grub.cfg`, because it didn't know about Ubuntu OS.
After I rebooted the system, Ubuntu's GRUB config greeted me, that did not have Arch Linux as a boot option. 

> I lost access to Arch Linux now. I was not happy, to say the least.


<p align="center"><font color="green" size="4">STATUS:
 
 <font color="red">Arch Linux `NOT_BOOTING`</font>
 ; Ubuntu `OK`
 ; Windows `OK`
 </font></p>

### CHALLENGE 4: Get Arch Linux to boot

> Next, I tried running the same `grub-mkconfig -o /boot/grub/grub.cfg` in Ubuntu OS.
>
> I got options for Arch Linux then, but they didn't work for me (poor Arch support in Ubuntu 18.04?).
> 
> Then I fired off an Arch Linux Live USB and decided to try to get GRUB reinstalled from my Arch Linux installation.

- re-formatted the `/dev/sda1` (EFI) partition.
- `arch-chroot`ed into my Arch installation and force-reinstalled all my arch linux packages by my previous post.(to get linux firmware images in `/boot`). 

> I could've done it by reinstalling just the firmware too, as `<Namarggon>` on `#archlinux` (IRC) suggested.

- ran `grub-install` and `grub-mkconfig` commands from my GitHub gist - [ARCH COMMANDS](https://gist.github.com/brute4s99/d22508c05868e7eca578580e5ea86829)
- ran `genfstab` command from that GitHub gist. 

>(kudos to `<GreyShade>` and `<iovec>` for helping me out on this one!)

<p align='center'> I have access to my Arch Linux and Ubuntu now.</p>


<p align="center"><font color="green" size="4">STATUS:
 Arch Linux `OK`
 ; Ubuntu `OK`
 ;  <font color="red">Windows `NOT_BOOTING`</font>
 </font></p>

<p align="center">UPDATE: </p>

>took a couple of commands: `bootrec /fixmbr` and `bootrec /rebuildBCD` from a Windows OS Installation Media. They installed the new EFI files in the EFI partition, and I finally had access to all three systems! \o/

<p align="center"><font color="green" size="4">STATUS:
 Arch Linux `OK`
 ; Ubuntu `OK`
 ;  Windows `OK`
 </font></p>

## CONCLUSION

I obviously should not have removed the EFI partition, since that step increased the work needed to set up other OSes.
If you happen to find any other weak links or better procedure, please do share it with me over the mail or twitter!

<p align='center'> <font size=3> Stay safe and make the internet a healthier place! </font></p>
