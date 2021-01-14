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
    encryption key 1 size 40bit 7 KEY_IS_HERE transmit-key
    encryption mode wep mandatory
    no shutdown
exit
```
> Legend:
> - With a VLAN, it will be :
> `encryption vlan 4 key 1 size 40bit 7 KEY_IS_HERE transmit-key`
> `encryption vlan 4 mode wep mandatory`

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


---

## Useful command

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