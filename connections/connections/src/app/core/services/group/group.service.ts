import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HTTP_CREATE_GROUP,
  HTTP_DELETE_GROUP,
  HTTP_GROUPS_LIST
} from 'src/app/constant/http-group';
import {
  Group,
  GroupCreateById,
  GroupName
} from 'src/app/store/models/group.models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private readonly httpGroupList = HTTP_GROUPS_LIST;
  private readonly httpCreateGroup = HTTP_CREATE_GROUP;
  private readonly httpDeleteGroup = HTTP_DELETE_GROUP;

  constructor(private http: HttpClient) {}

  public sendGroupListRequest() {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.get<Group>(this.httpGroupList, { headers });
  }

  public sendCreateGroupRequest(groupName: GroupName) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.post<GroupCreateById>(this.httpCreateGroup, groupName, {
      headers
    });
  }

  public sendDeleteGroupRequest(groupId: GroupCreateById) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const params = new HttpParams().set('groupID', groupId.groupID);
    return this.http.delete(this.httpDeleteGroup, { headers, params });
  }
}
