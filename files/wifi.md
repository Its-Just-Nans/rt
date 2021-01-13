<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# WiFi

## Vocabulary :

- `AAP` : Autonomous Access Point


## Command to configure WiFi

### Reminder Commande Cisco :

To change the name of the AAP :
```
hostname NEW_NAME_OF_AAP
```

To save configuration in the memory :
```
copy running-config startup-config
[ENTER]
```


### 2.4GHz or 5GHz ?

It's simple:
- when you need `2.4Ghz WiFi` or `802.11b/g` ,you will use `dot11Radio 0`
- when you need `5Ghz WiFi` or `802.11a`, you will use `dot11Radio 1`


### Configuration of the WiFi

To create a WiFi :
```sh
dot11 ssid WRITE_SSID_HERE
    authentication open
    guest-mode
exit
```
> Legend :
> - Here the WiFi in open with no security
> - `guest-mode` is used to show the SSID to client

To use the SSID and create WiFi :
```sh
int dot11Radio 1
    station-role root
    ssid WRITE_SSID_HERE
    channel 36
    no shutdown
```
> Legend :
> - `int dot11Radio 1` to use the `dot11Radio 1` or aslo `5Ghz Radio`
> - `station-role root` is used to specify the role of the AAP
> - `ssid WRITE_SSID_HERE` is used to link a SSID/WiFi to the radio interface
> - `channel 36` is used to declare the channel used by the radio
> - `no shutdown` to activate the WiFi

## Configuration of the AAP

To use the Virtual interface of the AAP
```
interface BVI1
    ip address 10.4.19.13 255.255.255.0
    no shutdown
```
> Legend :
> - `BVI1` is the name of the virtual interface

## Useful command :

To display active WiFi on the AAP
```sh
show dot11 BSSID
```

To show informations about an interface :
```sh
show interfaces dot11Radio 1
```
> Legend :
> - `dot11Radio 1` will show informations for **5Ghz** radio

To show who are connected to the AAP :
```sh
show dot11 associations
```