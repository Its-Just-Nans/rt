<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# WiFi

## Vocabulary :

- `AAP` : Autonomous Access Point

---

## Command to configure WiFi

### Reminder Commande Cisco :

To change the name of the AAP :
```nginx
hostname NEW_NAME_OF_AAP
```

To save configuration in the memory :
```sh
copy running-config startup-config
[ENTER]
```

Comments are with a `!` at the begin:
```sh
!this is a comment
```

---

### 2.4GHz or 5GHz ?

It's simple:
- when you need `2.4Ghz WiFi` or `802.11b/g`, you will use `dot11Radio 0`
- when you need `5Ghz WiFi` or `802.11a`, you will use `dot11Radio 1`


### Configuration of the WiFi

To create a WiFi :
```nginx
dot11 ssid WRITE_SSID_HERE
    authentication open
    guest-mode
exit
```
> Legend :
> - Here the WiFi in open with no security
> - `guest-mode` is used to show the SSID to client

To use the SSID and create WiFi :
```nginx
int dot11Radio 1
    station-role root
    ssid WRITE_SSID_HERE
    channel 36
    no shutdown
exit
```
> Legend :
> - `int dot11Radio 1` to use the `dot11Radio 1` or aslo `5Ghz Radio`
> - `station-role root` is used to specify the role of the AAP
> - `ssid WRITE_SSID_HERE` is used to link a SSID/WiFi to the radio interface
> - `channel 36` is used to declare the channel used by the radio
> - `no shutdown` to activate the WiFi

---

## Security

Three security are available :
- no security
- WEP (deprecated)
- WPA-PSK
  
### No security

The configuration above is without security

###  WEP

Normal declaration for the SSID :
```nginx
dot11 ssid WRITE_SSID_HERE
    authentication open
    guest-mode
exit
```

You need to add two line in the interface configuration :
```nginx
int dot11Radio 1
    station-role root
    ssid WRITE_SSID_HERE
    encryption key 1 size 40bit 7 12_CHAR_HEXA transmit-key
    encryption mode wep mandatory
    no shutdown
exit
```
> Legend:
> - With a VLAN, it will be :
> `encryption vlan 4 key 1 size 40bit 7 12_CHAR_HEXA transmit-key`
> `encryption vlan 4 mode wep mandatory`
> - The number `7` means it is encrypted

### WPA-PSK

Declaration for the SSID change :
```nginx
dot11 ssid WRITE_SSID_HERE
    authentication open
    authentication key-management wpa version 2
    wpa-psk ascii abcdef123456
    guest-mode
exit
```


You need to add one line in the interface configuration :
```nginx
int dot11Radio 1
    station-role root
    ssid WRITE_SSID_HERE
    encryption mode ciphers aes-ccm tkip
    no shutdown
exit
```
> Legend:
> - With a VLAN, it will be :
> `encryption vlan 3 mode ciphers aes-ccm tkip`


---

## Configuration of the AAP


### Virtual Interface

To use the Virtual interface of the AAP
```nginx
interface BVI1
    ip address 10.4.19.13 255.255.255.0
    !or you can use DHCP with :
    !ip address dhcp 
    no shutdown
exit
```
> Legend :
> - `BVI1` is the name of the virtual interface


### Power 

You can change the power of the AAP in the interface config
```nginx
int dot11Radio 1
    power local 50
    power client maximun
    no power [ client | local ]
```
> Legend:
> - `power local` is used to change the power of the AAP
> - `power client` is used to change the power of the client
> - values `50` is in `mW (milliWatts)`

### Use VLAN

To declare dot11 VLAN :
```nginx
dot11 vlan-name WRITE_SSID_1_HERE vlan NUM_VLAN_1
dot11 vlan-name WRITE_SSID_2_HERE vlan NUM_VLAN_2
```

Configuration for `dot11 ssid`:
```nginx
dot11 ssid WRITE_SSID_1_HERE
   vlan NUM_VLAN_1
   mbssid guest-mode
exit
```

Configuration for interface :
```nginx
!example for VLAN 3
interface FastEthernet0.3
    encapsulation dot1Q 3
    bridge-group 3
exit
```
> Legend :
> - `FastEthernet0.3` we use the sub-interface
> - `encapsulation dot1Q` to use VLAN
> - `dot1Q 3` to specify the VLAN 3

Configuration for interface radio:
```
interface Dot11Radio0
    ssid WRITE_SSID_1_HERE 
    ssid WRITE_SSID_2_HERE
    mbssid
    station-role root access-point
    !write the encryption
    !example : for WEP on VLAN 2
    encryption vlan 2 key 1 size 40bit 7 426FE03F299D transmit-key
    encryption vlan 2 mode wep mandatory

    !example : for WPA on VLAN 3
    encryption vlan 3 mode ciphers aes-ccm tkip
exit
```
> Legend:
> - Here we use the `Dot11Radio 0` interface
> - `mbssid` is used to declare mutiple SSID






---

## WIFi with a controller

To display a summary of all lightweight access points attached to the controller :
```nginx
show ap summary
```

---

## Useful commands

To display active WiFi on the AAP
```nginx
show dot11 BSSID
```

To show informations about an interface :
```nginx
show interfaces dot11Radio 1
```
> Legend :
> - `dot11Radio 1` will show informations for **5Ghz** radio

To show who are connected to the AAP :
```nginx
show dot11 associations
```

To delete authentication of a client :
```nginx
clear dot11 client [ @MAC ]
```

To clear statistics of an interface or of a client :
```nginx
clear dot11 statistics [ interface | @MAC ]
```

Activate request to create a network-map
```nginx
dot11 network-map [ collect-interval ]
```
> Legend :
> The `[ collect-interval ]` is a number between 1 to 60,  it specifies the time interval between requests


To display the radio network-map
```nginx
show dot11 network-map
```

To show other access point
```nginx
show dot11 adjacent-ap
```