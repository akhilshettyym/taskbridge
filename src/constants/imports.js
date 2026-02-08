import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import EmployeeDetails from "../components/Dashboard/Admin/EmployeeAdDetails";
import CreateTask from "../components/Dashboard/Admin/Createtask";
import Header from "../components/Basics/Header";
import TaskListNo from "../components/Dashboard/Employee/TaskListNo";
import TaskList from "../components/Dashboard/Employee/EmpTaskStatus";
import { AuthContext } from "../context/AuthProvider";
import PriorityTag from "../components/Basics/PriorityTag";
import TaskCount from "../components/Basics/TaskCount";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import EmployeeDashboard from "../components/Dashboard/Employee/EmployeeDashboard";
import AdminDashboard from "../components/Dashboard/Admin/AdminDashboard";
import InProgress from "../components/Dashboard/Employee/InProgress";
import CompletedTask from "../components/Dashboard/Employee/CompletedTask";
import FailedTask from "../components/Dashboard/Employee/FailedTask";
import NewTask from "../components/Dashboard/Employee/NewTask";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// STYLES
import {
    signinBtn, signinForm, signinFormDiv, signinHeaderDiv, signinHeaderH1, signinHeaderP, signinInputClass, signinLabelClass, signinMainDiv, signinSignUp, signinSignUpLink, signinWFull, adminDivClass, signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass, employeeDivClass,

    allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv,

    headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv,

    taskListNoChildDiv, taskListNoH2, taskListNoH3, taskListNoMainDiv, taskListNoTaskDiv,

    createTaskBtn, createTaskBtnDiv, createTaskChildDiv, createTaskFormClass, createTaskInputClass, createTaskLabelClass, createTaskLabelDesc, createTaskMainDiv, createTaskTextArea, createTaskTextAreaDiv,

    taskListCategoryH6, taskListChildDiv, taskListCompBtnClass, taskListCompBtnDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListTitleH2, taskListFailedBtnClass, taskListTitleSpanClass, taskListFailedBtnDiv, taskListInProBtnDiv, taskListInProBtnGreen, taskListInProBtnRed, taskListNewTaskBtnDiv, taskListNewTaskBtnGreen, taskListNewTaskBtnRed, taskListMainCompDiv,

    priorityMsgSpanClass, priorityMsgSpanHigh, priorityMsgSpanMedium, priorityMsgSpanLow,

} from '../styles/styles';


export {

    useState, useContext, useEffect, getLocalStorage, setLocalStorage,

    SignIn, SignUp, EmployeeDashboard, AdminDashboard, Navigate, Route, Routes,

    EmployeeDetails, CreateTask, Header, TaskListNo, TaskList, PriorityTag, TaskCount,

    InProgress, CompletedTask, FailedTask, NewTask,
    
    adminDivClass, employeeDivClass, AuthContext, Link,

    priorityMsgSpanClass, priorityMsgSpanHigh, priorityMsgSpanMedium, priorityMsgSpanLow,

    headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv,

    taskListNoChildDiv, taskListNoH2, taskListNoH3, taskListNoMainDiv, taskListNoTaskDiv,

    signinBtn, signinForm, signinFormDiv, signinHeaderDiv, signinHeaderH1, signinHeaderP, signinInputClass, signinLabelClass, signinMainDiv, signinSignUp, signinSignUpLink, signinWFull,

    signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass,

    allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv,

    createTaskBtn, createTaskBtnDiv, createTaskChildDiv, createTaskFormClass, createTaskInputClass, createTaskLabelClass, createTaskLabelDesc, createTaskMainDiv, createTaskTextArea, createTaskTextAreaDiv,

    taskListCategoryH6, taskListChildDiv, taskListCompBtnClass, taskListCompBtnDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListTitleH2, taskListFailedBtnClass, taskListTitleSpanClass, taskListFailedBtnDiv, taskListInProBtnDiv, taskListInProBtnGreen, taskListInProBtnRed, taskListNewTaskBtnDiv, taskListNewTaskBtnGreen, taskListNewTaskBtnRed, taskListMainCompDiv

};